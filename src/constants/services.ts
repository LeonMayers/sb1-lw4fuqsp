import { Cpu, HardDrive, Wrench, Shield, Wifi, Settings } from 'lucide-react';

export const services = [
  {
    icon: Cpu,
    title: 'Manutenção de Computadores',
    description: 'Diagnóstico e reparo de problemas em computadores e notebooks. Soluções para lentidão, travamentos e falhas de sistema.',
    price: 'A partir de R$ 100,00'
  },
  {
    icon: HardDrive,
    title: 'Upgrade de Hardware',
    description: 'Instalação de novos componentes como SSD, memória RAM e processador para melhorar o desempenho do seu equipamento.',
    price: 'A partir de R$ 150,00'
  },
  {
    icon: Shield,
    title: 'Limpeza e Manutenção Preventiva',
    description: 'Limpeza completa dos componentes, troca de pasta térmica e manutenção preventiva para prolongar a vida útil do equipamento.',
    price: 'A partir de R$ 120,00'
  },
  {
    icon: Settings,
    title: 'Instalação de Sistemas',
    description: 'Instalação e configuração de sistemas operacionais, programas e aplicativos essenciais.',
    price: 'A partir de R$ 80,00'
  },
  {
    icon: Wifi,
    title: 'Configuração de Rede',
    description: 'Instalação e configuração de redes Wi-Fi, compartilhamento de arquivos e impressoras.',
    price: 'A partir de R$ 100,00'
  },
  {
    icon: Wrench,
    title: 'Recuperação de Dados',
    description: 'Recuperação de arquivos perdidos ou deletados acidentalmente de HDs, SSDs e pendrives.',
    price: 'A partir de R$ 200,00'
  }
];