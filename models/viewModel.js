import mongoose from 'mongoose';

const viewSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

const WebsiteView = mongoose.model('WebsiteView', viewSchema);
export default WebsiteView;
