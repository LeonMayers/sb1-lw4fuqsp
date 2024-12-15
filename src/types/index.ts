export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceHistory: ServiceRecord[];
}

export interface ServiceRecord {
  id: string;
  date: string;
  serviceType: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
}