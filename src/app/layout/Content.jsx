const Content = ({ children }) => {
  return (
    <div className="content-wrapper flex-grow-1 d-flex flex-column">
      <div className="flex-grow-1 container">{children}</div>
    </div>
  );
};

export { Content };
