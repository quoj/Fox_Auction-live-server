const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Tạo kết nối đến cơ sở dữ liệu
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'auction'
});

db.connect(err => {
  if (err) throw err;
  console.log('Kết nối đến cơ sở dữ liệu');
});

// Xử lý yêu cầu đặt giá thầu
app.post('/api/bids', (req, res) => {
  const { productId, bidAmount, bidderId } = req.body; // Thêm bidderId

  if (!productId || !bidAmount || !bidderId) {
    return res.status(400).json({ message: 'Product ID, số tiền đấu thầu và ID người đấu thầu là bắt buộc' });
  }

  // Kiểm tra số tiền đấu thầu có lớn hơn số tiền đấu thầu hiện tại không
  const checkBidSql = 'SELECT MAX(bid_amount) AS highestBid FROM Bids WHERE product_id = ?';
  db.query(checkBidSql, [productId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Không thể lấy số tiền đấu thầu cao nhất', error: err });
    }

    const highestBid = result[0].highestBid;
    if (highestBid !== null && bidAmount <= highestBid) {
      return res.status(400).json({ message: 'Số tiền đấu thầu phải lớn hơn số tiền đấu thầu hiện tại' });
    }

    // Chèn giá thầu mới vào cơ sở dữ liệu
    const sql = 'INSERT INTO Bids (product_id, bidder_id, bid_amount, created_at) VALUES (?, ?, ?, NOW())';
    db.query(sql, [productId, bidderId, bidAmount], (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Không thể đặt giá thầu', error: err });
      }
      res.status(200).json({ message: 'Đặt giá thầu thành công', bidId: result.insertId });
    });
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
