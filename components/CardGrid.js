export default function CardGrid({ cols = 2, children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '20px',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  )
}
