import Log  from "../models/Log.js";
import Patient from "../models/Patient.js";

export const getPatient = async (req, res) => {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

 export const getRecordAll = async(req, res) => {
    try {
        const Logs = await Log.find().sort({_id: -1}).limit(100);
        res.status(200).json(Logs);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
 }
 

 export const getRecord = async(req, res) => {
  try {
      const Logs = await Log.find().sort({ create_at: -1 }).limit(100);
      
      const features = Logs.map((item) => item.HR, item.RR, item.rrRMS);
      const target = Logs.map((item) => item[imputedField]);

      const knnImputer = new KNNImputer({
        k,
        data: features,
        result: target,
      });
  
      const imputedValues = knnImputer.impute({ X: features });

      for (let i = 0; i < data.length; i++) {
        data[i][imputedField] = imputedValues[i];
        await Log.updateOne({ _id: data[i]._id }, { $set: { [imputedField]: imputedValues[i] } });
      }
      
      res.status(200).json(Logs);
      } catch (error) {
      res.status(404).json({ message: error.message });
      }

}