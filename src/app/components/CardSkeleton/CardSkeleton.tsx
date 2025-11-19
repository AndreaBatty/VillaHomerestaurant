import "./CardSkeleton.css";

export default function CardSkeleton() {
  return (
    <div className="card card-skeleton" aria-hidden="true">
      <div className="skeleton-img"></div>
      <div className="skeleton-body">
        <div className="skeleton-line title"></div>
        <div className="skeleton-line short"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
}
