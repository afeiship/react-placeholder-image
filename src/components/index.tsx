import classNames from 'classnames';
import React, { Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-placeholder-image';
const SOURCE_HOST = 'https://via.placeholder.com';
const randomText = () => Math.random().toString(36).substring(5, 15);

/**
 * via.placeholder.com提供了一个可以方便生成占位图的服务。你可以通过修改URL中的参数对图片的尺寸、颜色、文本进行自定义。
 *
 * 这里有一些主要的参数：
 *
 * 1. **Size (尺寸)：** 你可以在URL中直接指定图片的尺寸。例如，175x175的图片，URL应为：https://via.placeholder.com/175x175
 * 2. **Background Color (背景色)：** 你可以设定图片的背景色，例如： https://via.placeholder.com/175x175/0000FF 。后面的"0000FF"是颜色的十六进制码，这会将背景色设置为蓝色。
 * 3. **Foreground Color (前景色)：** 你可以设定文本的颜色，方法是在背景色后面，使用斜杠(/)隔开，例如： https://via.placeholder.com/175x175/000000/FFFFFF 。这将把文本颜色设为白色。
 * 4. **Text (文本)：** 默认情况下，文本是图片的尺寸值。你也可以通过在URL末尾加上.ttf或.png文件添加自定义文本： https://via.placeholder.com/175x175/FFFFFF/000000?text=Hello。
 * 5. **Image Format (图片格式)：** 你可以在URL中用.png, .jpg, .gif等方式来指定图片格式。例如：https://via.placeholder.com/175x175.png。
 * 因此，你可以组合以上参数来创建自己需要的占位图。例如，一个175x175的蓝底白字，上面写着"Hello"的占位图可以通过这个URL生成：https://via.placeholder.com/175x175/0000FF/FFFFFF?text=Hello。
 */

export type ReactPlaceholderImageProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The square size of image.
   */
  size?: number;
  /**
   * The width of image.
   */
  width?: number;
  /**
   * The height of image.
   */
  height?: number;
  /**
   * The text to display in the image.
   */
  text?: string | true
  /**
   * The background color of image.
   */
  bg?: string;
  /**
   * The text color of image.
   */
  color?: string;
} & Omit<HTMLAttributes<HTMLImageElement>, 'width' | 'height' | 'src' | 'alt' | 'role'>;

export default class ReactPlaceholderImage extends Component<ReactPlaceholderImageProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    size: 80,
    text: 'preview',
    bg: 'EEEEEE',
    color: '999999'
  };

  render() {
    const { className, size, width, height, text, color, bg, ...props } = this.props;
    const _width = width || size;
    const _height = height || size;
    const _text = text === true ? randomText() : text;
    const src = `${SOURCE_HOST}/${_width}x${_height}/${bg}/${color}/?text=${_text}`;

    return (
      <img
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        width={_width}
        height={_height}
        src={src}
        role='presentation'
        alt='Placeholder Image'
        {...props}
      />
    );
  }
}
