import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Introduction</h1>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Become a student</h2>
              <p>Students can register in courses they like.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Become an Instructor</h2>
              <p>
                You can become an instructor by registering as one, and start
                making online courses.
              </p>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2021 Irene Yin
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
