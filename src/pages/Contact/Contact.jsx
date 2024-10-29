import { Box, VStack } from "@chakra-ui/react";
import ContactCard from "./component/ContactCard";
import Layout from "../../components/Layout";

const Contact = () => {
  const information = [
    "Truyện đọc hoàn toàn free không thu phí",
    "Tài khoản đăng nhập sẽ được chia cấp độ [quyền lợi ghi ở mục quyền lợi tài khoản]",
    "Để tài khoản được thăng cấp thì tài khoản đó phải là bạn đọc thường xuyên ở website (ít nhât 1 tuần), và tương tác sôi nổi",
    "Khi đã thỏa mãn điều kiện thì bạn vui lòng bấm vào nút [Yêu cầu thăng cấp] trên menu (icon người dùng)",
    "Khi được ban quản trị phê duyệt thì sẽ có thông báo thăng cấp, thông tin cấp độ tài khoản được ghi ở mục [Quyền lợi tới từ tài khoản]",
    "Chúc mọi người đọc truyện vui vẻ",
  ];

  const aboutUs = [
    "Hầu hết nội dung của trang web này đều được thu thập từ Internet",
    "Nếu bạn không muốn nội dung xuất hiện trên trang web này",
    "Vui lòng gửi email và đính kèm với các tài liệu có liên quan",
    "BQT sẽ xử lý sớm nhất có thể",
    "Email: dnguyenx688@gmail.com",
    "Thank you",
  ];
  return (
    <Layout>
      <VStack gap="4">
        <ContactCard
          headerText="Thông tin liên quan tới tài khoản"
          content={information}
          isOrdered={true}
        />
        <ContactCard headerText="About us" content={aboutUs} />
      </VStack>
    </Layout>
  );
};

export default Contact;
