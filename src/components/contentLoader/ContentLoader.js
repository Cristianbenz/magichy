import './contentLoader.css'

export default function SkeletonLoader() {
  return (
    <div className="skeletonLoader-layout skeletonLoader-size">
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
      <div className="itemPlaceholder-bg"></div>
    </div>
  );
}
