const Chrono = () => {
  return (
    <div>
      <div class="timer-group">
        <div class="timer hour">
          <div class="hand">
            <span></span>
          </div>
          <div class="hand">
            <span></span>
          </div>
        </div>
        <div class="timer minute">
          <div class="hand">
            <span></span>
          </div>
          <div class="hand">
            <span></span>
          </div>
        </div>
        <div class="timer second">
          <div class="hand">
            <span></span>
          </div>
          <div class="hand">
            <span></span>
          </div>
        </div>
        <div class="face">
          <h2>A CSS Chronograph</h2>
          <p id="lazy">00:00:00</p>
        </div>
      </div>
    </div>
  );
};

export default Chrono;
