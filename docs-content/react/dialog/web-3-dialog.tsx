import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";

export function Web3Dialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Connect Wallet</Button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Connect a Wallet
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pr-2">
          <div className="mb-6">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Popular
            </Typography>
            <ul className="mt-1 -ml-2 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography color="blue-gray" variant="h6">
                  MetaMask
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/coinbase.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/connect-wallet.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Connect Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              More
            </Typography>
            <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/trust-wallet.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Trust Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/argent-wallet.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
          <Typography variant="small" color="gray" className="font-normal">
            New to Ethereum wallets?
          </Typography>
          <Button variant="text" size="sm">
            Learn More
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
