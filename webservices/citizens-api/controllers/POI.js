import co from 'co';

import { POI, Information, User } from '../bdd-connector/';
import _ from 'lodash/collection';

class POICtrl {

    static writeInformation(req, res, next) {
        co(function *() {
            try {
                const user = req.body.user;
                const pInterest = req.body.POI;
                const information = req.body.information;
                const POIsaved = yield POI.save({ coords: pInterest.coords, userId: user._id });
                const informationSaved = yield Information.save({ userId: user._id, ...information, poiId: POIsaved._id});
                const result = {
                    POIsaved,
                    informationSaved
                };
                res.status(201).send(result);
            } catch (err) {
                next(err);
            }
        }).catch(function (err) {
            console.log(err, 'error');
        });
    }

    static getPOIofCity(req, res, next) {
        co(function *() {
           try {
               const collectionOfPOIs = yield POI.getAll({ removed: false });
               const POIids = collectionOfPOIs.map(POI => POI.userId);

               const collectionUsers = yield User.getAll({ _id: { $in: POIids }});
               const usersObject = _.keyBy(collectionUsers, user => user._id);

               const result = collectionOfPOIs.map(POI => {
                   let POIwithUser = {...POI};
                   POIwithUser.user = usersObject[POI._id];
                   return POIwithUser;
               });

               res.send(result);

           } catch (err) {
                res.status(500).end();
           }
        });
    }
}

export default POICtrl;
