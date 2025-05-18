import WebsiteView from '../models/viewModel.js';

export const incrementView = async (req, res) => {
  try {
    let view = await WebsiteView.findOne();
    if (!view) {
      view = new WebsiteView({ count: 1 });
    } else {
      view.count += 1;
    }
    await view.save();
    res.status(200).json({ success: true, count: view.count });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getViewCount = async (req, res) => {
  try {
    let view = await WebsiteView.findOne();
    if (!view) view = await WebsiteView.create({ count: 0 });
    res.status(200).json({ success: true, count: view.count });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
