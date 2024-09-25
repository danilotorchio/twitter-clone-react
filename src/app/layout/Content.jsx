const Content = ({ children }) => {
  return (
    <div className="content-wrapper flex-grow-1 d-flex flex-column">
      <div className="flex-grow-1 d-flex flex-column container p-0">{children}</div>
    </div>
  );
};

export { Content };
