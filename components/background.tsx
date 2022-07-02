export const BackGroundComponent = () => {
    return (
      <>
        <div
          className="w-screen h-screen animate__animated animate__fadeOut animate__faster"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
          }}
        ></div>
      </>
    );
  };
  