export default function S06C0609() {
    function getCurrentPeriod() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
  
      // Calculate the total minutes from 08:00
      let totalMinutes = (hours - 8) * 60 + minutes;
  
      // If before 08:00, it is not within the period range
      if (totalMinutes < 0) {
        return 0; // 0 교시 (이전 시간)
      }
  
      // Periods 1 to 20 are every 30 minutes starting from 08:00
      if (totalMinutes < 10 * 60) {
        // Before 18:00 (20th period end)
        return Math.floor(totalMinutes / 30) + 1;
      }
  
      // After 18:00, periods are every 25 minutes
      totalMinutes -= 10 * 60; // Subtract 600 minutes (18:00)
  
      return Math.floor(totalMinutes / 25) + 21;
    }
    const period = getCurrentPeriod();
  
    return (
      <div>
        <p>0609 {period}교시 입니다.</p>
      </div>
    );
  }
  