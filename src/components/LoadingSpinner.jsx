import React from "react"

const LoadingSpinner = ({ size = 40, color = 'dodgerblue' }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: size,
        height: size,
        border: `4px solid ${color}`,
        borderTop: '4px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
    >
    </div>
  )
}

const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const StyleTag = () => (
  <style>{spinKeyframes}</style>
);

const LoadingSpinnerWithStyle = (props) => (
  <>
    <StyleTag />
    <LoadingSpinner {...props} />
  </>
);

export default LoadingSpinnerWithStyle;
