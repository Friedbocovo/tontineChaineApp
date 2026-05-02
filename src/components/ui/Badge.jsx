import './Badge.css';

export default function Badge({ label, variant, prefix }) {
  return (
    <span className={`badge badge--${variant}`}>
      {prefix ? <span className="badge__prefix">{prefix}</span> : null}
      <span>{label}</span>
    </span>
  );
}
