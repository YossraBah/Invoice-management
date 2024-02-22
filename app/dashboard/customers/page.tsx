import { fetchCustomersData } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table'
import { Metadata } from 'next';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};
export default async function Page() {
  const data = await fetchCustomersData()
  return (
    <div className="w-full">
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={data} />
      </Suspense>
    </div>
  );
  }