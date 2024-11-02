export class Statistics {
  findWinnerRank(lottoTicket, winningNumArr, bonusNumber) {
    const rankCounts = {
      3: { count: 0, prize: 5000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 1500000 },
      5.5: { count: 0, prize: 30000000 },
      6: { count: 0, prize: 2000000000 },
    };

    lottoTicket.forEach((ticket) => {
      const matchNumArr = ticket.filter((num) => winningNumArr.includes(num));
      const matchCount = matchNumArr.length;

      if (matchCount >= 3) {
        if (matchCount === 5 && ticket.includes(Number(bonusNumber))) {
          rankCounts[5.5].count += 1;
        } else if (matchCount === 3 || matchCount === 4 || matchCount === 5 || matchCount === 6) {
          rankCounts[matchCount].count += 1;
        }
      }
    });

    return rankCounts;
  }
}
