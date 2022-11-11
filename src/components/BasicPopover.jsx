import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../styles/PopoverButton.css";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div class="">
      <Button
        class="PopoverBtn"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}>
        Jafar Thwahrah
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <Typography sx={{ p: 2 }}>
          <section class="w-25" style={{}}>
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  class="img-fluid"
                  style={{ width: "180px", borderRadius: "10px" }}
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">Danny McLoan</h5>

                <div
                  class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{ backgroundColor: "#efefef" }}>
                  <div>
                    <p class="small text-muted mb-1">Tours</p>
                    <p class="mb-0">41</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Followers</p>
                    <p class="mb-0">976</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Rating</p>
                    <p class="mb-0">8.5</p>
                  </div>
                </div>
                <div class="d-flex pt-1">
                  <button type="button" class="btn btn-primary flex-grow-1">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Typography>
      </Popover>
    </div>
  );
}
