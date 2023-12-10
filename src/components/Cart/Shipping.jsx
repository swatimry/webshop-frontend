import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const defaultShippingInfo = {
    hno: "",
    city: "",
    country: "",
    state: "",
    pin: "",
    phone: "",
  };
  const { shippingInfo } = useSelector((state) => state.cartdata);
  const [hno, sethno] = useState(shippingInfo?.hno || defaultShippingInfo.hno);
  const [city, setcity] = useState(
    shippingInfo?.city || defaultShippingInfo.city
  );
  const [country, setcountry] = useState(
    shippingInfo?.country || defaultShippingInfo.country
  );
  const [state, setstate] = useState(
    shippingInfo?.state || defaultShippingInfo.state
  );
  const [pin, setpin] = useState(shippingInfo?.pin || defaultShippingInfo.pin);
  const [phone, setphone] = useState(
    shippingInfo?.phone || defaultShippingInfo.phone
  );

  const Dispatch = useDispatch();
  const navigate = useNavigate();

  const submitdetails = (event) => {
    event.preventDefault();

    Dispatch({
      type: "AddShippinginfo",
      payload: {
        hno,
        city,
        country,
        state,
        pin,
        phone,
      },
    });
    localStorage.setItem(
      "shippinginfolocal",
      JSON.stringify({
        hno,
        city,
        country,
        state,
        pin,
        phone,
      })
    );
    navigate("/orderconfirm");
  };

  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form onSubmit={submitdetails}>
          <div>
            <label>House No</label>
            <input
              type="text"
              placeholder="Enter Houseno"
              value={hno}
              required
              onChange={(e) => sethno(e.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              required
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <div>
            <label>Country</label>
            <select
              name=""
              id=""
              value={country}
              required
              onChange={(e) => setcountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          {country && (
            <div>
              <label>State</label>
              <select
                name=""
                id=""
                value={state}
                required
                onChange={(e) => setstate(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <div>
            <label>Pincode</label>
            <input
              type="number"
              placeholder="Enter Pincode"
              value={pin}
              required
              onChange={(e) => setpin(e.target.value)}
            />
          </div>
          <div>
            <label>Enter phoneNo</label>
            <input
              type="number"
              placeholder="Enter Phoneno"
              value={phone}
              required
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};
export default Shipping;
