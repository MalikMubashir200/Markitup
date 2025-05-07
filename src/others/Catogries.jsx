import React from "react";

function CategoryCard(props) {
  return (
    <div
      className="relative h-80 w-full sm:w-80 md:w-96 overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
          {props.title}
        </h3>
      </div>
    </div>
  );
}

export default CategoryCard;
