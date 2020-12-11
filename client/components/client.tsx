import { useEffect, useState } from "react";
import momentjs from "moment";

import { tProduct, tClient } from "./types";

import Product from "./product";

import Styles from "../styles/Client.module.css";

export default function client() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/user/11111")
      .then((response) => response.json())
      .then((data: tClient) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      {user === null ? (
        <div></div>
      ) : (
        <>
          <section className={Styles.container}>
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
                {user.products &&
                  user.products.map((product: tProduct) => {
                    return <Product product={product} />;
                  })}
              </>
            </article>
          </section>
        </>
      )}
    </>
  );
}
