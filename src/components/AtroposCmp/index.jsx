import Atropos from 'atropos/react';

const AtroposCmp = ({ children }) => {
  return (
    <div id="app">
      <Atropos className="my-atropos" shadow={false} highlight={false} activeOffset={10}>
        {children}
      </Atropos>
    </div>
  )
}

export default AtroposCmp;