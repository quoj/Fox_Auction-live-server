import React, { useEffect, useState } from 'react';

const BidderList = () => {
  const [bidList, setBidList] = useState([]);
  const [highestBid, setHighestBid] = useState(0); // Lưu trữ giá đấu cao nhất
  const [highestBidder, setHighestBidder] = useState(null); // Lưu trữ người đấu giá cao nhất

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch('http://localhost:5196/api/Bids');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBidList(data);
        getHighestBid(data); // Gọi hàm để lấy giá cao nhất
        getHighestBidder(data); // Gọi hàm để lấy người đấu giá cao nhất
      } catch (error) {
        console.error('Error fetching bid data:', error);
      }
    };

    fetchBids();
  }, []);

  const getHighestBid = (bids) => {
    if (bids.length === 0) return;
    const highest = Math.max(...bids.map(bid => bid.amount)); // Lấy giá đấu cao nhất
    setHighestBid(highest);
  };

  const getHighestBidder = (bids) => {
    if (bids.length === 0) return null;
    const highest = bids.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
    setHighestBidder(highest);
  };

  return (
    <div className="bidder-list mb-3">


      <h4 className="mb-3">Người đấu giá cao nhất</h4>
      {highestBidder ? (
        <div>
          <strong>{highestBidder.bidderName || 'Anonymous'}</strong>: ${highestBidder.amount.toFixed(2)}
        </div>
      ) : (
        <p>Chưa có người đấu giá.</p>
      )}
    </div>
  );
};

export default BidderList;
