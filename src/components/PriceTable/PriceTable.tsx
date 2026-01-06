import type { PriceItem } from "../../types/priceList";
import "./PriceTable.css";

type Props = {
  items: PriceItem[];
};

export function PriceTable({ items }: Props) {
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Code</th>
          <th>Shrinked</th>
          <th>Unshrinked</th>
          <th>No Box</th>
          <th>Loose Pack</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.code}>
            <td className="image-cell">
              <img src={item.imageUrl} alt={item.code} />
            </td>
            <td>{item.code}</td>
            <td>
              <div className="price-cell">
                <span className="price-value">{item.shrinked}</span>
                <span className="price-desc">(Shrinked)</span>
              </div>
            </td>

            <td>
              <div className="price-cell">
                <span className="price-value">{item.unshrinked}</span>
                <span className="price-desc">(Unshrinked)</span>
              </div>
            </td>

            <td>
              <div className="price-cell">
                <span className="price-value">{item.noBox}</span>
                <span className="price-desc">(No Box)</span>
              </div>
            </td>

            <td>
              <div className="price-cell">
                <span className="price-value">{item.loosePack}</span>
                <span className="price-desc">(Loose Pack)</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
