const Item = require('../models/item_model');

async function createItem(req, res) {
  

    const items = [
      {
        "title": "Vintage Rolex Watch",
        "description": "A classic vintage Rolex watch in excellent condition.",
        "imgUrl": "https://cdn.pixabay.com/photo/2020/01/31/08/38/rolex-4807479_1280.jpg",
        "currentBid": "5000",
        "activeDays": "7"
      },
      {
        "title": "Antique Wooden Chair",
        "description": "A beautifully crafted antique wooden chair from the 19th century.",
        "imgUrl": "https://cdn.pixabay.com/photo/2019/08/25/11/41/chair-4429296_1280.jpg",
        "currentBid": "150",
        "activeDays": "5"
      },
      {
        "title": "MacBook Pro 2021",
        "description": "Latest model MacBook Pro with M1 chip, 16GB RAM, and 512GB SSD.",
        "imgUrl": "https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg",
        "currentBid": "1200",
        "activeDays": "10"
      },
      {
        "title": "Mountain Bike",
        "description": "A high-performance mountain bike suitable for rough terrains.",
        "imgUrl": "https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_1280.jpg",
        "currentBid": "300",
        "activeDays": "3"
      },
      {
        "title": "Signed Baseball",
        "description": "A baseball signed by a famous player from the 1990s.",
        "imgUrl": "https://cdn.pixabay.com/photo/2017/10/01/07/28/baseball-2804477_1280.png",
        "currentBid": "250",
        "activeDays": "6"
      },
      {
        "title": "Smart TV 55 inches",
        "description": "A 55-inch smart TV with 4K resolution and HDR support.",
        "imgUrl": "https://cdn.pixabay.com/photo/2017/04/07/12/58/lion-2210947_1280.jpg",
        "currentBid": "400",
        "activeDays": "8"
      },
      {
        "title": "Electric Guitar",
        "description": "A brand new electric guitar with a vibrant red finish.",
        "imgUrl": "https://cdn.pixabay.com/photo/2024/02/26/19/51/guitar-8598823_1280.jpg",
        "currentBid": "350",
        "activeDays": "4"
      },
      {
        "title": "Leather Jacket",
        "description": "A stylish leather jacket perfect for all seasons.",
        "imgUrl": "https://cdn.pixabay.com/photo/2021/03/01/17/49/man-6060365_1280.jpg",
        "currentBid": "200",
        "activeDays": "7"
      },
      {
        "title": "Gaming Console",
        "description": "Latest generation gaming console with two controllers and one game.",
        "imgUrl": "https://cdn.pixabay.com/photo/2017/04/09/12/00/gaming-2215601_1280.jpg",
        "currentBid": "450",
        "activeDays": "5"
      },
      {
        "title": "Art Painting",
        "description": "An original art painting by a renowned artist.",
        "imgUrl": "https://cdn.pixabay.com/photo/2018/01/28/17/48/gallery-3114279_1280.jpg",
        "currentBid": "1000",
        "activeDays": "12"
      }
    ]
    items.forEach(async element => {
      const item = new Item({
        title: element.title,
        description: element.description,
        imgUrl: element.imgUrl,
        currentBid: element.currentBid,
        activeDays: element.activeDays,
      });
      const savedItem = await item.save();
      console.log(savedItem);
    });

    res.json(items);
}

// Update a item by ID
async function putItem(req, res) {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, {
      currentBid: req.body.currentBid
    } , {
      new: true,
    });
    item.bidders.push({name: req.body.user, bid: req.body.currentBid});
    await item.save();
    if (!item) {
      return res.status(404).json({ error: 'item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get all items
async function getItems(req, res) {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createItem,
  putItem,
  getItems,
};
