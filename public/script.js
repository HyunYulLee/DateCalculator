// D-Day 목표 날짜 설정
const targetDate = new Date("2026-02-04T00:00:00"); // 목표 날짜 설정

function updateCountdown() {
    const now = new Date(); // 현재 시간
    const diff = targetDate - now; // 목표 날짜와 현재 시간의 차이 (밀리초)

    if (diff <= 0) {
        // D-Day가 도달했거나 지났을 경우
        document.getElementById('days').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('seconds').innerText = 0;
        clearInterval(intervalId); // 카운트다운 종료
        return;
    }

    // 시간 계산
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 각 영역에 텍스트 업데이트
    document.getElementById('days').innerText = `${days}일`;
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// 1초마다 갱신
const intervalId = setInterval(updateCountdown, 1000);

// 초기 실행
updateCountdown();
