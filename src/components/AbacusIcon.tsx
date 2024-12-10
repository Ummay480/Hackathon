const AbacusIcon = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
      {/* First Rod */}
      <div style={{ position: 'relative', width: '50px', height: '1px', backgroundColor: 'black' }}>
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            left: '20px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: 'black',
          }}
        ></span>
      </div>
  
      {/* Second Rod */}
      <div style={{ position: 'relative', width: '50px', height: '1px', backgroundColor: 'black' }}>
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            left: '35px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: 'black',
          }}
        ></span>
      </div>
  
      {/* Third Rod */}
      <div style={{ position: 'relative', width: '50px', height: '1px', backgroundColor: 'black' }}>
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            left: '5px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: 'black',
          }}
        ></span>
      </div>
    </div>
  );
  
  export default AbacusIcon;
  