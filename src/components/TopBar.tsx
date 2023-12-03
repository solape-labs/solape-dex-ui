import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import IconButton from '@/components/Button';
import { ConnectWalletButton } from './wallet/ConnectWalletButton';

const TopBar = () => {
  const { connected } = useWallet();
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-between p-4">
      <div className="flex items-center">
        {/* Back button, shown if there's a previous page to navigate to */}
        <IconButton onClick={() => router.back()} aria-label="Back" className="mr-2">
          <ArrowLeftIcon className="h-6 w-6" />
        </IconButton>
          <ConnectWalletButton />
      </div>
      {/* Additional content can go here, e.g., application logo or title */}
    </div>
  );
};

export default TopBar;
