import MenuCard from "./MenuCard";
import latte from "../../assests/latte.jpg";
import mocha from "../../assests/mocha.jpg";
import coldcoffe from "../../assests/coldcoffe.jpg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Menu = () => {
  const dispatch = useDispatch();
  const addtocarthandler = (itemno) => {
    switch (itemno) {
      case 1:
        dispatch({ type: "AddFrappe" });
        dispatch({ type: "calcamount" });
        toast.success("Added to cart");
        break;
      case 2:
        dispatch({ type: "AddAmericano" });
        dispatch({ type: "calcamount" });
        toast.success("Added to cart");
        break;
      case 3:
        dispatch({ type: "AddLatte" });
        dispatch({ type: "calcamount" });
        toast.success("Added to cart");
        break;
      default:
        break;
    }
  };
  return (
    <section className="menuclass" id="menu">
      <h2>MENU</h2>
      <Grid container spacing={2} className="menuitems">
        <Grid xs={12} sm={6} md={4} className="griddiv">
          <MenuCard
            itemimg={coldcoffe}
            itemno={1}
            itemname="Frappe"
            price={200}
            addtocarthandler={addtocarthandler}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} className="griddiv">
          <MenuCard
            itemimg={mocha}
            itemno={2}
            itemname="Americano"
            price={300}
            addtocarthandler={addtocarthandler}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4} className="griddiv">
          <MenuCard
            itemimg={latte}
            itemno={3}
            itemname="Latte"
            price={250}
            addtocarthandler={addtocarthandler}
          />
        </Grid>
      </Grid>
    </section>
  );
};
export default Menu;
