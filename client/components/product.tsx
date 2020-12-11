import Styles from "../styles/Product.module.css";

import momentjs from "moment";

export default function product({ product }) {
  return (
    <div key={product._id.toString()} className={Styles.product}>
      <p>Tipo de producto: </p>
      <p>{product.productTypeName}</p>
      <p>Nombre del producto: </p>
      <p>{product.productName}</p>
      <p> Numero asociado: </p>
      <p>{product.numeracioTerminal}</p>
      <div className={Styles.wrapper_dates}>
        <p>
          Contratado el {momentjs(product.soldAt).locale("es").format("LLL")}
        </p>
        <p>
          Ultimo cambio realizado:{" "}
          {momentjs(product.updateAt).locale("es").format("LLL")}
        </p>
      </div>
    </div>
  );
}
