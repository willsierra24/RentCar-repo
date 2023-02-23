import React, { useState } from "react";
import "./Filter.css";
// Con archivo de excluidos
export function Filter({ cars, filterInHome, paginate, xclude }) {
  const [filter, setFilter] = useState(1);
  let image =
    "https://uploads-ssl.webflow.com/62167102782a877db7cb5371/6228085b47f25a5082e1af42_vc-kia-picanto-manual.png";
  const filterCar = cars,
    brand = [],
    brandTT = [],
    discount = [],
    discountTT = [],
    category = [],
    categoryTT = [],
    typeOfBox = [],
    typeOfBoxTT = [],
    fuelType = [],
    fuelTypeTT = [],
    doors = [],
    doorsTT = [];
  function fnFilter(event) {
    event.preventDefault();
    setFilter(event.target.id);
  }

  filterCar.map((car) => {
    !doors.includes(car.doors)
      ? (doors.push(car.doors), doorsTT.push(1))
      : (doorsTT[doors.indexOf(car.doors)] =
          doorsTT[doors.indexOf(car.doors)] + 1);

    !fuelType.includes(car.fuelType)
      ? (fuelType.push(car.fuelType), fuelTypeTT.push(1))
      : (fuelTypeTT[fuelType.indexOf(car.fuelType)] =
          fuelTypeTT[fuelType.indexOf(car.fuelType)] + 1);

    !brand.includes(car.brand)
      ? (brand.push(car.brand), brandTT.push(1))
      : (brandTT[brand.indexOf(car.brand)] =
          brandTT[brand.indexOf(car.brand)] + 1);

    !typeOfBox.includes(car.typeOfBox)
      ? (typeOfBox.push(car.typeOfBox), typeOfBoxTT.push(1))
      : (typeOfBoxTT[typeOfBox.indexOf(car.typeOfBox)] =
          typeOfBoxTT[typeOfBox.indexOf(car.typeOfBox)] + 1);

    !discount.includes(car.discount)
      ? (discount.push(car.discount), discountTT.push(1))
      : (discountTT[discount.indexOf(car.discount)] =
          discountTT[discount.indexOf(car.discount)] + 1);

    !category.includes(car.category)
      ? (category.push(car.category), categoryTT.push(1))
      : (categoryTT[category.indexOf(car.category)] =
          categoryTT[category.indexOf(car.category)] + 1);
  });

  function selectfilter(e, obj) {
    e.preventDefault();
    let sele = document.getElementById(obj);
    sele.className === "filtimg"
      ? (sele.className = "filtimgF")
      : (sele.className = "filtimg");
  }

  return (
    <>
      <div className="filt">
        <div className="filtT">
          <div
            id="1"
            className="item"
            onClick={(event) => {
              fnFilter(event);
            }}
          >
            {" "}
            - By brand{" "}
          </div>
          {filter === "1" ? (
            <>
              <div className="item2">
                {brand.map((obj, ind) => (
                  <div
                    className="filtercard"
                    onClick={(e) => (
                      selectfilter(e, obj),
                      filterInHome(e, obj, 0),
                      paginate(e, 1)
                    )}
                  >
                    {xclude[0].includes(obj) ? (
                      <div>
                        <img
                          id={obj}
                          className="filtimgF"
                          src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116"
                          alt={"No"}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          id={obj}
                          className="filtimg"
                          src="https://www.pnguniverse.com/wp-content/uploads/2021/06/Carro-blanco-marca-nuevaa-834afdf1.png"
                          alt={"No"}
                        />
                      </div>
                    )}
                    <div>
                      {obj} ({brandTT[ind]})
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </>
          ) : (
            <></>
          )}
          <div
            id="2"
            className="item"
            onClick={(event) => {
              fnFilter(event);
            }}
          >
            {" "}
            - By category{" "}
          </div>
          {filter === "2" ? (
            <>
              <div className="item2">
                {category.map((obj, ind) => (
                  <div
                    className="filtercard"
                    onClick={(e) => (
                      selectfilter(e, obj),
                      filterInHome(e, obj, 1),
                      paginate(e, 1)
                    )}
                  >
                    {xclude[1].includes(obj) ? (
                      <div>
                        <img
                          id={obj}
                          className="filtimgF"
                          src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116"
                          alt={"No"}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          id={obj}
                          className="filtimg"
                          src="https://www.pngall.com/wp-content/uploads/13/Ford-Mustang.png"
                          alt={"No"}
                        />
                      </div>
                    )}
                    <div>
                      {obj} ({categoryTT[ind]})
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </>
          ) : (
            <></>
          )}
          <div
            id="3"
            className="item"
            onClick={(event) => {
              fnFilter(event);
            }}
          >
            {" "}
            - By transmission{" "}
          </div>
          {filter === "3" ? (
            <>
              <div className="item2">
                {typeOfBox.map((obj, ind) => (
                  <div
                    className="filtercard"
                    onClick={(e) => (
                      selectfilter(e, obj),
                      filterInHome(e, obj, 2),
                      paginate(e, 1)
                    )}
                  >
                    {xclude[2].includes(obj) ? (
                      <div>
                        <img
                          id={obj}
                          className="filtimgF"
                          src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116"
                          alt={"No"}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          id={obj}
                          className="filtimg"
                          src="https://s3.amazonaws.com/kia.com.co/Rio_Sedan_Gris_9ad3fa0dbf.png"
                          alt={"No"}
                        />
                      </div>
                    )}
                    <div>
                      {obj} ({typeOfBoxTT[ind]})
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </>
          ) : (
            <></>
          )}
          <div
            id="4"
            className="item"
            onClick={(event) => {
              fnFilter(event);
            }}
          >
            {" "}
            - By fuel Type{" "}
          </div>
          {filter === "4" ? (
            <>
              <div className="item2">
                {fuelType.map((obj, ind) => (
                  <div
                    className="filtercard"
                    onClick={(e) => (
                      selectfilter(e, obj),
                      filterInHome(e, obj, 3),
                      paginate(e, 1)
                    )}
                  >
                    {xclude[3].includes(obj) ? (
                      <div>
                        <img
                          id={obj}
                          className="filtimgF"
                          src="https://www.suzuki.com.uy/public/7d64db4658.png"
                          alt={"No"}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          id={obj}
                          className="filtimg"
                          src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116"
                          alt={"No"}
                        />
                      </div>
                    )}
                    <div>
                      {obj} ({fuelTypeTT[ind]})
                    </div>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </>
          ) : (
            <></>
          )}

          <div
            id="5"
            className="item"
            onClick={(event) => {
              fnFilter(event);
            }}
          >
            {" "}
            - By discount{" "}
          </div>
          {filter === "5" ? (
            <>
              <div className="item2">
                {discount.map((obj, ind) => (
                  <div
                    className="filtercard"
                    onClick={(e) => (
                      selectfilter(e, obj),
                      filterInHome(e, obj, 4),
                      paginate(e, 1)
                    )}
                  >
                    {xclude[4].includes(obj) ? (
                      <div>
                        <img
                          id={obj}
                          className="filtimgF"
                          src="https://content.r9cdn.net/rimg/carimages/generic/02_economy_red.png?height=116"
                          alt={"No"}
                        />
                      </div>
                    ) : (
                      <div>
                        <img
                          id={obj}
                          className="filtimg"
                          src="https://www.suzuki.com.uy/public/7d64db4658.png"
                          alt={"No"}
                        />
                      </div>
                    )}
                    <div>
                      {obj} ({discountTT[ind]})
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
          <div></div>
        </div>
      </div>
    </>
  );
}
