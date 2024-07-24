import { Component, Input } from '@angular/core';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import tinymce from 'tinymce';

@Component({
  selector: 'app-blog-editor',
  standalone: true,
  imports: [EditorComponent, FormsModule],
  templateUrl: './blog-editor.component.html',
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})


export class BlogEditorComponent {
  content = `<h1>Welcome to TinyMCE</h1>
                        <p>TinyMCE is a powerful and flexible text editor that allows you to create and edit content with ease. Here's a quick guide on how to use it:</p>
                        
                        <h2>Basic Features</h2>
                        <p>Start typing in the editor to create your content. You can format text, create lists, insert links, images, and more using the toolbar options.</p>
                        
                        <h3>Formatting Text</h3>
                        <p>Use the toolbar buttons to apply <strong>bold</strong>, <em>italic</em>, or <u>underline</u> formatting to your text.</p>
                        
                        <h3>Creating Lists</h3>
                        <p>Create ordered (numbered) and unordered (bulleted) lists using the list buttons on the toolbar:</p>
                        <ul>
                            <li>This is an unordered list item.</li>
                            <li>This is another unordered list item.</li>
                        </ul>
                        <ol>
                            <li>This is an ordered list item.</li>
                            <li>This is another ordered list item.</li>
                        </ol>
                        
                        <h3>Inserting Links</h3>
                        <p>Insert links using the link button on the toolbar. Select the text you want to turn into a link, click the link button, and enter the URL.</p>
                        
                        <h3>Inserting Images</h3>
                        <p>Insert images using the image button on the toolbar. Click the image button, upload your image or provide a URL, and insert it into your content.</p>
                        
                        <h2>Advanced Features</h2>
                        <p>Explore more advanced features like tables, code blocks, and media embeds using the toolbar options.</p>
                        
                        <h3>Inserting Tables</h3>
                        <p>To insert a table, click the table button on the toolbar, select the number of rows and columns you want, and click to insert. You can then populate the table cells with content.</p>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                    <th>Header 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Row 1, Cell 1</td>
                                    <td>Row 1, Cell 2</td>
                                    <td>Row 1, Cell 3</td>
                                </tr>
                                <tr>
                                    <td>Row 2, Cell 1</td>
                                    <td>Row 2, Cell 2</td>
                                    <td>Row 2, Cell 3</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <h3>Inserting Code Samples</h3>
                        <p>To insert a code sample, click the code button on the toolbar, then enter or paste your code. Here's an example:</p>
                        <pre><code class="language-html">
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Example Code&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
                        </code></pre>
                        
                        <h2>Saving and Exporting</h2>
                        <p>Once you're done editing, you can save or export your content as needed. Use the save button or export options available in your application.</p>
                        
                        <h2>Tips and Tricks</h2>
                        <p>Here are some additional tips for using TinyMCE effectively:</p>
                        <ul>
                            <li>Use keyboard shortcuts for common actions (e.g., Ctrl+B for bold, Ctrl+I for italic).</li>
                            <li>Customize the toolbar to include the buttons you use most often.</li>
                            <li>Explore the plugins available for TinyMCE to extend its functionality.</li>
                        </ul>
                        
                        <p>Enjoy using TinyMCE for all your content creation needs!</p>`

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
    skin: 'oxide-dark',
    content_css: 'dark',
    height: 720,

  }

  getEditorContent = () => {
    return tinymce.activeEditor?.getContent()
  }

}
