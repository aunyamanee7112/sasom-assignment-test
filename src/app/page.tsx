import dynamic from "next/dynamic";

const ProductDetail = dynamic(() => import('./components/page/ProductTemplate'))

export default function Home() {
  return (
    <div>
      <ProductDetail/>
    </div>
  );
}
