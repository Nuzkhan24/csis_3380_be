const Item = require('../models/item_model');

async function createItem(req, res) {
  

    const items = [
      {
        "title": "Vintage Rolex Watch",
        "description": "A classic vintage Rolex watch in excellent condition.",
        "imgUrl": "https://example.com/images/rolex.jpg",
        "currentBid": "5000",
        "activeDays": "7"
      },
      {
        "title": "Antique Wooden Chair",
        "description": "A beautifully crafted antique wooden chair from the 19th century.",
        "imgUrl": "https://example.com/images/antique-chair.jpg",
        "currentBid": "150",
        "activeDays": "5"
      },
      {
        "title": "MacBook Pro 2021",
        "description": "Latest model MacBook Pro with M1 chip, 16GB RAM, and 512GB SSD.",
        "imgUrl": "https://example.com/images/macbook-pro.jpg",
        "currentBid": "1200",
        "activeDays": "10"
      },
      {
        "title": "Mountain Bike",
        "description": "A high-performance mountain bike suitable for rough terrains.",
        "imgUrl": "https://example.com/images/mountain-bike.jpg",
        "currentBid": "300",
        "activeDays": "3"
      },
      {
        "title": "Signed Baseball",
        "description": "A baseball signed by a famous player from the 1990s.",
        "imgUrl": "https://example.com/images/signed-baseball.jpg",
        "currentBid": "250",
        "activeDays": "6"
      },
      {
        "title": "Smart TV 55 inches",
        "description": "A 55-inch smart TV with 4K resolution and HDR support.",
        "imgUrl": "https://example.com/images/smart-tv.jpg",
        "currentBid": "400",
        "activeDays": "8"
      },
      {
        "title": "Electric Guitar",
        "description": "A brand new electric guitar with a vibrant red finish.",
        "imgUrl": "https://example.com/images/electric-guitar.jpg",
        "currentBid": "350",
        "activeDays": "4"
      },
      {
        "title": "Leather Jacket",
        "description": "A stylish leather jacket perfect for all seasons.",
        "imgUrl": "https://example.com/images/leather-jacket.jpg",
        "currentBid": "200",
        "activeDays": "7"
      },
      {
        "title": "Gaming Console",
        "description": "Latest generation gaming console with two controllers and one game.",
        "imgUrl": "https://example.com/images/gaming-console.jpg",
        "currentBid": "450",
        "activeDays": "5"
      },
      {
        "title": "Art Painting",
        "description": "An original art painting by a renowned artist.",
        "imgUrl": "https://example.com/images/art-painting.jpg",
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
