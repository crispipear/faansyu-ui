/* eslint-disable import/no-webpack-loader-syntax */
import About from '!babel-loader!@mdx-js/loader!./About.mdx'
import GettingStarted from '!babel-loader!@mdx-js/loader!./GettingStarted.mdx'
import Overview from '!babel-loader!@mdx-js/loader!./Overview.mdx'
import Theming from '!babel-loader!@mdx-js/loader!./Theming.mdx'

// components
import Button from '!babel-loader!@mdx-js/loader!./Button.mdx'
import Table from '!babel-loader!@mdx-js/loader!./Table.mdx'
import Tag from '!babel-loader!@mdx-js/loader!./Tag.mdx'
import Typography from '!babel-loader!@mdx-js/loader!./Typography.mdx'

export {
  About,
  GettingStarted,
  Overview,
  Theming,
  //components
  Button,
  Table,
  Tag,
  Typography
}
