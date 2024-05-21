import React from 'react';
import {THelpTicketHistory} from '@/types/tickerTypes';
import formatDateTime from '@/lib/helpers/formatDateTime';

const History = ({history}: { history: THelpTicketHistory[] }) => {
    return (
        <div
            className='min-w-[300px] flex flex-col p-4 w-[300px] max-h-[calc(100vh-160px)] h-fit overflow-y-auto border-2 border-gray-400'>
            {history.map((historyElement) =>
                <div className='border-b border-green-400 last:border-none py-2 flex flex-col gap-y-2'>
                    {historyElement.record}
                    <div className='text-blue-900'>{formatDateTime(historyElement.dateTime)}</div>

                </div>
            )}
        </div>
    );
};

export default History;
