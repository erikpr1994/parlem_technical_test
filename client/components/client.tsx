import { useEffect, useState } from "react";
import momentjs from "moment";

import { tProduct, tClient } from "./types";

import * as APIService from "../services/api";

import Product from "./product";

import Styles from "../styles/Client.module.css";

export default function client() {
  const [user, setUser] = useState(null);
  const [userProducts, setProducts] = useState([]);

  useEffect(() => {
    APIService.getAllCustomers().then((data) => setUser(data));
  }, []);

  useEffect(() => {
    let newProducts = [];
    user &&
      user.forEach((user: tClient) => {
        APIService.getCustomerProducts(user.customerId).then((data) => {
          data.forEach((element: tProduct) => {
            newProducts = [...newProducts, element];
            console.log(newProducts);
            setProducts(newProducts);
          });
        });
      });
  }, [user]);

  return (
    <>
      {user === null ? (
        <div></div>
      ) : (
        user &&
        user.map((user: tClient) => (
          <>
            <section
              className={Styles.container}
              key={user.customerId.toString()}
            >
              <div>
                <h1>Datos del usuario</h1>
              </div>
              <article className={Styles.user_data}>
                <h2>
                  {user.givenName} {user.familyName1}
                </h2>
                <div className={Styles.wrapper_document}>
                  <p>Tipo de documento: </p>
                  <p>{user.docType}</p>
                  <p>Número de documento: </p>
                  <p>{user.docNum}</p>
                </div>
                <div className={Styles.wrapper_document}>
                  <p>Email: </p>
                  <p>{user.email}</p>
                  <p>Telefono de contacto: </p>
                  <p>{user.phone}</p>
                </div>
                <div className={Styles.wrapper_dates}>
                  <p>
                    Usuario des de{" "}
                    {momentjs(user.createdAt).locale("es").format("LLL")}
                  </p>
                  <p>
                    Ultimo cambio realizado:{" "}
                    {momentjs(user.updatedAt).locale("es").format("LLL")}
                  </p>
                </div>
              </article>
              <article className={Styles.product_data}>
                <h2>Productos contratados</h2>
                <>
                  {userProducts &&
                    userProducts.map((product: tProduct) => {
                      if (product.customerId === user.customerId)
                        return <Product product={product} />;
                    })}
                </>
              </article>
            </section>
          </>
        ))
      )}
    </>
  );
}
