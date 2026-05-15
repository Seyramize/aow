import { COLORS, FONTS } from '@/lib/constants'

export default function FormField({ value, onChange, placeholder, type = 'text', error }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%', padding: '12px 16px',
          border: `1px solid ${error ? '#e53e3e' : 'rgba(11,27,40,0.18)'}`,
          borderRadius: '8px', fontFamily: FONTS.body,
          fontSize: '14px', outline: 'none',
          color: COLORS.blue, background: '#fff',
          boxSizing: 'border-box', letterSpacing: '-0.2px',
        }}
      />
      {error && (
        <p style={{ color: '#e53e3e', fontSize: '11px', marginTop: '4px', fontFamily: FONTS.body }}>
          {error}
        </p>
      )}
    </div>
  )
}
