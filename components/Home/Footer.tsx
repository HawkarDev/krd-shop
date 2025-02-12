import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-2 pb-12">
      {/* define grid system */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* first part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            KRD Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            autem reiciendis enim. Nisi in quis non hic praesentium rerum
            sapiente voluptatem cumque officia fugiat necessitatibus molestias,
            debitis, recusandae voluptatum alias.
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            ( +000 ) 4444 3333 33 - info@krd.com
          </p>
        </div>
        {/* Information Part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link"> About us</p>

          <p className="footer_link"> Privacy Police</p>
          <p className="footer_link"> Return Police</p>
          <p className="footer_link"> Shipping Police</p>
          <p className="footer_link"> Dropshipping</p>
        </div>

        {/* Account Part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link"> Dashboard</p>

          <p className="footer_link"> My Orders</p>
          <p className="footer_link"> Account Details</p>
          <p className="footer_link"> Track Orders</p>
        </div>

        {/* Shop Part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link"> Affiliate</p>

          <p className="footer_link"> Best Seller</p>
          <p className="footer_link"> Latest Products</p>
          <p className="footer_link"> Salw Products</p>
        </div>
      </div>
      {/* copyright */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 w-3/4 mx-auto">
        <p className="text-sm text-black opacity-60">
          @ Copyright krd Shop 2020{" "}
        </p>
        <Image
          src="/images/footer.png"
          alt="footer image"
          width={230}
          height={230}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Footer;
Footer;
