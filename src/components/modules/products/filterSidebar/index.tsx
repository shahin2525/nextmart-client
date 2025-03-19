"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

const FilterSidebar = () => {
  const [price, setPrice] = useState([50]);

  return (
    <aside className="w-64 p-4 border-r border-gray-300 space-y-6 bg-slate-300">
      {/* Filter by Price */}
      <div>
        <h3 className="font-semibold mb-2">Filter By Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            placeholder="Min"
            className="w-20 p-1 border rounded"
          />
          <input
            type="number"
            placeholder="Max"
            className="w-20 p-1 border rounded"
          />
        </div>
        <Slider
          value={price}
          onValueChange={setPrice}
          max={1000}
          step={10}
          className="mt-2"
        />
        <p>${price}</p>
      </div>

      {/* Product Types */}
      <div>
        <h3 className="font-semibold mb-2">Product Types</h3>
        {[
          "Laptop & Accessories",
          "Computers-PC",
          "Speakers & Headset",
          "Keyboards & Mouse",
          "Camera",
          "Video Recording",
          "Tablets",
          "Table Lights",
        ].map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox id={type} />
            <Label htmlFor={type}>{type}</Label>
          </div>
        ))}
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        {["HP (83)", "Apple (58)", "Dell (44)", "Asus (10)", "Camera"].map(
          (brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <Label htmlFor={brand}>{brand}</Label>
            </div>
          )
        )}
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>
        <RadioGroup>
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem value={`${rating}`} id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="flex items-center">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                  />
                ))}
                {Array.from({ length: 5 - rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-300" />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-2">Availability</h3>
        {["In Stock", "Pre Order", "Upcoming"].map((status) => (
          <div key={status} className="flex items-center space-x-2">
            <Checkbox id={status} />
            <Label htmlFor={status}>{status}</Label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FilterSidebar;
