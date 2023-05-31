import Atropos from 'atropos/react';

const AtroposCmp = ({ children }) => {
  return (
    <div id="app">
      <Atropos className="my-atropos" shadow={false} highlight={false} >
        {children}
      </Atropos>
    </div>
  )
}

export default AtroposCmp;