/*
 * @Author: chenhaojie a18520145493@163.com
 * @Date: 2023-11-27 16:10:08
 * @LastEditors: chenhaojie a18520145493@163.com
 * @LastEditTime: 2023-12-05 10:53:47
 * @FilePath: \text-dashboard\app\dashboard\(overview)\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { unstable_cache as noCache } from 'next/cache';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

const getRevenueData = noCache(async () => fetchRevenue(), ['fetchRevenue']);
const getLatestInvoices = noCache(
  async () => fetchLatestInvoices(),
  ['fetchLatestInvoices'],
);
const getCardData = noCache(async () => fetchCardData(), ['fetchCardData']);

export default async function Page() {
  const revenueData = await getRevenueData();
  const latestInvoicesData = await getLatestInvoices();
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfCustomers,
    numberOfInvoices,
  } = await getCardData();
  return (
    <main className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
      <h1>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenueData} />
        <LatestInvoices latestInvoices={latestInvoicesData} />
      </div>
    </main>
  );
}
