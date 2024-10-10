import React, { useState, useEffect } from 'react'; // Import React và các hook cần thiết

const BidderList1 = ({ onHighestBidChange }) => {
  const [bidList, setBidList] = useState([]);
  const [highestBid, setHighestBid] = useState(0);

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const response = await fetch('http://localhost:5196/api/Bids');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBidList(data);
        getHighestBid(data); // Lấy giá thầu cao nhất
      } catch (error) {
        console.error('Error fetching bid data:', error);
      }
    };

    fetchBids();
  }, []);

  const getHighestBid = (bids) => {
    if (bids.length === 0) return;
    const highest = Math.max(...bids.map(bid => bid.amount));
    setHighestBid(highest);

    if (onHighestBidChange) { // Kiểm tra nếu onHighestBidChange được truyền vào
      onHighestBidChange(highest); // Truyền giá trị highestBid lên component cha
    }
  };

  return (
    <div className="bidder-list mb-3">
      <h4 className="mb-3">
        {highestBid > 0 ? (
          <div>
            <strong>${highestBid.toFixed(2)}</strong>
          </div>
        ) : (
          <p>Chưa có giá đấu.</p>
        )}
      </h4>
    </div>
  );
};

export default BidderList1;
