import { Console } from '@woowacourse/mission-utils';

export class Output {
  printLottoTicket(lottoTicketArr) {
    Console.print(`${lottoTicketArr.length}개를 구매했습니다.`);

    lottoTicketArr.forEach((ticket) => {
      const ticketNumArr = ticket.lottoNumbers;

      Console.print(`[${ticketNumArr.join(', ')}]`);
    });
  }

  printWinnerRank(rankCounts) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${rankCounts[3].count}개
4개 일치 (50,000원) - ${rankCounts[4].count}개
5개 일치 (1,500,000원) - ${rankCounts[5].count}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[5.5].count}개
6개 일치 (2,000,000,000원) - ${rankCounts[6].count}개
    `);
  }

  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}
