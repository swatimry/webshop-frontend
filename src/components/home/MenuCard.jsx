const MenuCard = ({ itemno, itemname, price, itemimg, addtocarthandler }) => {
  return (
    <div className="Menucard">
      <h4>{itemname}</h4>
      <main>
        <img src={itemimg} alt={itemno} />
        <h5>₹{price}</h5>
        <button className="menubutton" onClick={() => addtocarthandler(itemno)}>
          Buy Now
        </button>
      </main>
    </div>
  );
};
export default MenuCard;
