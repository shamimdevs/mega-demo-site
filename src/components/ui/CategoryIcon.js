import Image from "next/image";
import Icon from "./Icon";

// Uses the category's image URL when set, otherwise the built-in SVG icon.
export default function CategoryIcon({ category, className = "" }) {
  if (!category.image) return <Icon name={category.icon} className={className} />;

  return (
    <span className={`relative inline-block ${className}`}>
      <Image src={category.image} alt="" fill sizes="32px" className="object-contain" />
    </span>
  );
}
