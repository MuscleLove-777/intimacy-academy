/* ============================================
   インティマシーアカデミー - Level 2: 関係の深め方
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "関係の深め方",
    icon: "💜",
    description: "デートから親密な関係への自然なステップアップ",
    modules: [

        {
            id: 201,
            title: "脈ありサインの読み方",
            duration: "10分",
            content: `
<h2>💓 脈ありサインの読み方</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>相手の好意は<strong>言葉よりも行動</strong>に表れます。非言語サインを読めるようになると、相手の気持ちに気づけるようになります。ただし、<strong>一つのサインだけで判断せず、複数の兆候を総合的に見る</strong>ことが大切です。</p>
</div>

<h3>👀 非言語の好意サイン</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #E91E63;">
<h4 style="color:#E91E63;">💕 好意のサイン</h4>
<ul>
<li>あなたの方に体を向ける</li>
<li>髪を触る・身だしなみを整える</li>
<li>瞳孔が拡大する</li>
<li>足のつま先があなたを向いている</li>
<li>物理的な距離が近い</li>
<li>偶然のボディタッチが多い</li>
<li>笑顔が多い・よく目が合う</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #78909C;">
<h4 style="color:#78909C;">🙅 興味がないサイン</h4>
<ul>
<li>体が別方向を向いている</li>
<li>腕を組む・足を組む</li>
<li>スマホを頻繁にチェック</li>
<li>物理的に距離を取る</li>
<li>返信が遅い・短い</li>
<li>デートの誘いをはぐらかす</li>
<li>他の人の話を頻繁にする</li>
</ul>
</div>
</div>

<h3>📱 テキストでの好意サイン</h3>

<table>
<tr><th>好意ありの兆候</th><th>興味なしの兆候</th></tr>
<tr><td>返信が早い・丁寧</td><td>返信が極端に遅い</td></tr>
<tr><td>質問を返してくる</td><td>会話を広げない</td></tr>
<tr><td>絵文字・スタンプが多い</td><td>「。」で終わる短文</td></tr>
<tr><td>「また会いたい」と言う</td><td>予定を聞いてもはぐらかす</td></tr>
<tr><td>あなたの投稿に反応する</td><td>SNSでの反応がない</td></tr>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 重要な注意</div>
<ul>
<li>サインは<strong>可能性の指標</strong>であり、100%の確証ではない</li>
<li>思い込みで行動すると<strong>ストーカー行為</strong>になりかねない</li>
<li>迷ったら<strong>直接、気持ちを確認する</strong>のが最善</li>
<li>相手が距離を取っている場合は<strong>それを尊重する</strong></li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>好意は<strong>体の向き・距離・接触頻度</strong>に表れる</li>
<li>テキストでは<strong>返信の早さ・質問の有無・次の約束</strong>がポイント</li>
<li>一つのサインで判断せず、<strong>総合的に見る</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "好意のサインとして最も信頼できるのはどれですか？", options: ["一つの強いサインがある", "複数のサインが総合的に見られる", "相手が優しい言葉をかけてくれる", "相手のSNSのいいね数"], answer: 1, explanation: "一つのサインだけでなく、複数の兆候を総合的に判断することが大切です。" },
            ]
        },

        {
            id: 202,
            title: "スキンシップの段階",
            duration: "12分",
            content: `
<h2>🤝 スキンシップの段階</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>スキンシップは段階的に進めるのが基本です。<strong>相手の反応を観察し、相手のペースを尊重する</strong>ことが何より大切です。</p>
</div>

<h3>📊 スキンシップのエスカレーター</h3>

<div class="visual-box">
<div class="visual-box-title">段階的なスキンシップの進め方</div>
<div style="display:flex;flex-direction:column;gap:6px;padding:15px;max-width:500px;margin:0 auto;">
<div style="background:#E8F5E9;border-left:4px solid #4CAF50;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv1：社会的接触</strong>：握手・軽く肩を叩く・ハイタッチ
</div>
<div style="background:#E8F5E9;border-left:4px solid #66BB6A;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv2：親しみの接触</strong>：腕・肩への軽い接触・並んで座る
</div>
<div style="background:#FFF3E0;border-left:4px solid #FF9800;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv3：親密な接触</strong>：腕を組む・手をつなぐ・ハグ
</div>
<div style="background:#FCE4EC;border-left:4px solid #E91E63;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv4：ロマンチックな接触</strong>：頬へのキス・おでこへのキス
</div>
<div style="background:#F3E5F5;border-left:4px solid #9C27B0;padding:10px 16px;border-radius:0 8px 8px 0;">
<strong>Lv5：情熱的な接触</strong>：唇へのキス
</div>
</div>
</div>

<h3>✅ 同意の確認方法</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>反応を観察する</strong>
触れたとき相手が<strong>リラックスして近づいてくる</strong>か、<strong>緊張して離れる</strong>かを見る。
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>言葉で確認する</strong>
「手を繋いでもいい？」と聞くことは<strong>全く恥ずかしいことではない</strong>。むしろ好感度が上がる。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>NOを受け入れる</strong>
断られたら<strong>すぐに引き下がる</strong>。機嫌を悪くしたり、しつこくしない。
</div>
</div>
</div>

<div class="info-box danger">
<div class="info-box-title">⛔ 絶対にしてはいけないこと</div>
<ul>
<li>相手が嫌がっているのに<strong>続ける</strong></li>
<li>お酒の力を借りて<strong>無理に進める</strong></li>
<li>「雰囲気を壊したくない」と<strong>確認を省略する</strong></li>
<li>断られて<strong>怒る・責める</strong></li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>スキンシップは<strong>段階的に</strong>進める</li>
<li>常に<strong>相手の反応を観察</strong>する</li>
<li>言葉での確認は<strong>恥ずかしいことではなく、好感を持たれる</strong></li>
<li>NOは<strong>即座に受け入れる</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "「手を繋いでもいい？」と言葉で確認することについて、正しい認識はどれですか？", options: ["雰囲気を壊すので避けるべき", "女性にだけ聞くべき", "全く恥ずかしくなく、むしろ好感度が上がる", "付き合ってからでないと聞くべきでない"], answer: 2, explanation: "言葉での同意確認は相手への尊重を示し、多くの場合好感度が上がります。" },
                { id: "q202_2", type: "choice", question: "スキンシップで断られたときの正しい対応はどれですか？", options: ["もう一度お願いする", "理由を聞く", "すぐに引き下がり、相手を責めない", "雰囲気を変えてもう一度試す"], answer: 2, explanation: "NOは即座に受け入れましょう。しつこくしたり理由を追及するのはNGです。" },
            ]
        },

        {
            id: 203,
            title: "告白と関係の定義",
            duration: "10分",
            content: `
<h2>💌 告白と関係の定義</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>日本では「告白」が一つの文化ですが、世界的には<strong>関係の進行は曖昧なグラデーション</strong>です。大切なのは、<strong>お互いの関係を明確にする会話</strong>を持つことです。</p>
</div>

<h3>⏰ タイミングの見極め</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ 良いタイミング</h4>
<ul>
<li>十分にデートを重ねた後（3〜5回以上）</li>
<li>お互いの気持ちが通じ合っている実感がある</li>
<li>二人きりのリラックスした空間</li>
<li>相手も「この関係はどこに向かっているのか」考えている雰囲気</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">❌ 避けるべきタイミング</h4>
<ul>
<li>出会って間もない（相手が重く感じる）</li>
<li>相手が忙しい・ストレス中</li>
<li>大勢の前（プレッシャーになる）</li>
<li>お酒で酔っている状態</li>
</ul>
</div>
</div>

<h3>💬 「DTR」（Define The Relationship）の会話</h3>

<div class="info-box formula">
<div class="info-box-title">🔑 関係定義の会話フレーム</div>
<ol>
<li><strong>自分の気持ちを伝える</strong>：「一緒にいるとすごく楽しくて、あなたのことが好きです」</li>
<li><strong>相手の気持ちを聞く</strong>：「〇〇さんはどう感じていますか？」</li>
<li><strong>関係の方向性を確認</strong>：「もしよければ、付き合ってほしいと思っているんですが」</li>
<li><strong>相手の返答を尊重</strong>：どんな答えでも受け入れる心構え</li>
</ol>
</div>

<h3>💔 断られたときの心構え</h3>

<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<strong>相手に感謝する</strong>
「正直に気持ちを教えてくれてありがとう」
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<strong>自分を責めない</strong>
相性の問題であって、あなたの価値の問題ではない。
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<strong>距離を置く</strong>
しばらく連絡を控えて、気持ちを整理する時間を取る。
</div>
</div>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li>告白は<strong>十分な信頼関係</strong>が築けてから</li>
<li><strong>DTR（関係定義の会話）</strong>でお互いの気持ちを確認</li>
<li>断られても<strong>相手に感謝し、自分を責めない</strong></li>
</ul>
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "告白のタイミングとして避けるべきなのはどれですか？", options: ["十分にデートを重ねた後", "二人きりのリラックスした空間", "大勢の前で盛り上げながら", "お互いの気持ちが通じ合っている実感がある時"], answer: 2, explanation: "大勢の前での告白は相手にプレッシャーを与え、本当の気持ちで答えにくくなります。" },
            ]
        },

        {
            id: 204,
            title: "信頼を深めるコミュニケーション",
            duration: "10分",
            content: `
<h2>🗝 信頼を深めるコミュニケーション</h2>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
<p>付き合い始めてからが本番です。<strong>日常的な小さなコミュニケーション</strong>の積み重ねが、深い信頼関係を作ります。</p>
</div>

<h3>💕 ラブランゲージ（愛情表現のスタイル）</h3>

<div class="visual-box">
<div class="visual-box-title">ゲイリー・チャップマンの5つのラブランゲージ</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;padding:15px 0;">
<div style="background:#FCE4EC;border:2px solid #E91E63;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">💬</div>
<div style="font-weight:700;font-size:0.85rem;">肯定の言葉</div>
<div style="font-size:0.75rem;color:#666;">「好き」「ありがとう」<br>を言葉で伝える</div>
</div>
<div style="background:#F3E5F5;border:2px solid #9C27B0;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">⏰</div>
<div style="font-weight:700;font-size:0.85rem;">充実した時間</div>
<div style="font-size:0.75rem;color:#666;">一緒に過ごす<br>質の高い時間</div>
</div>
<div style="background:#E8EAF6;border:2px solid #3F51B5;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🎁</div>
<div style="font-weight:700;font-size:0.85rem;">贈り物</div>
<div style="font-size:0.75rem;color:#666;">気持ちを込めた<br>プレゼント</div>
</div>
<div style="background:#E8F5E9;border:2px solid #4CAF50;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🤝</div>
<div style="font-weight:700;font-size:0.85rem;">奉仕の行為</div>
<div style="font-size:0.75rem;color:#666;">相手のために<br>何かしてあげる</div>
</div>
<div style="background:#FFF3E0;border:2px solid #FF9800;border-radius:12px;padding:16px;text-align:center;">
<div style="font-size:1.5rem;">🫂</div>
<div style="font-weight:700;font-size:0.85rem;">身体的接触</div>
<div style="font-size:0.75rem;color:#666;">ハグ・手をつなぐ<br>スキンシップ</div>
</div>
</div>
</div>

<p>自分とパートナーの<strong>ラブランゲージは異なる</strong>場合が多いです。相手が求める愛情表現で愛を伝えることが大切です。</p>

<h3>🛡 安全な関係の特徴</h3>

<div class="compare-grid">
<div class="compare-card" style="border-left:4px solid #4CAF50;">
<h4 style="color:#4CAF50;">✅ 健全な関係</h4>
<ul>
<li>お互いの意見を尊重する</li>
<li>一人の時間も大切にできる</li>
<li>対等なパートナーシップ</li>
<li>不安や不満を伝えられる</li>
<li>お互いの成長を応援する</li>
</ul>
</div>
<div class="compare-card" style="border-left:4px solid #EF4444;">
<h4 style="color:#EF4444;">🚩 危険な関係（レッドフラグ）</h4>
<ul>
<li>スマホや行動を監視する</li>
<li>友人との付き合いを制限する</li>
<li>暴言・暴力がある</li>
<li>罪悪感を植え付けて操作する</li>
<li>対等でない力関係</li>
</ul>
</div>
</div>

<div class="info-box danger">
<div class="info-box-title">⛔ DVの兆候に注意</div>
<p>以下の兆候があれば、すぐに専門機関に相談してください：</p>
<ul>
<li>身体的暴力・精神的暴力（モラハラ）</li>
<li>経済的支配・社会的孤立の強要</li>
<li><strong>DV相談ナビ：#8008</strong>（最寄りの相談窓口につながります）</li>
</ul>
</div>

<div class="info-box success">
<div class="info-box-title">✅ このモジュールのまとめ</div>
<ul>
<li><strong>ラブランゲージ</strong>は人それぞれ。相手のスタイルに合わせる</li>
<li>健全な関係は<strong>対等・尊重・自由</strong>が基本</li>
<li>レッドフラグを見逃さない</li>
</ul>
</div>
`,
            quiz: [
                { id: "q204_1", type: "choice", question: "パートナーが「一緒に過ごす時間」を最も重視するタイプの場合、最も喜ばれるのはどれですか？", options: ["高価なプレゼントを贈る", "「好きだよ」と伝える", "スマホを置いて一緒に映画を観る", "家事を手伝う"], answer: 2, explanation: "ラブランゲージが「充実した時間」の人には、一緒に過ごす質の高い時間が最も愛情として伝わります。" },
                { id: "q204_2", type: "choice", question: "健全な関係の特徴として正しくないのはどれですか？", options: ["お互いの意見を尊重する", "パートナーのスマホを定期的にチェックする", "一人の時間も大切にできる", "不安や不満を伝えられる"], answer: 1, explanation: "スマホのチェックは監視行為であり、健全な関係ではありません。信頼に基づいた関係が大切です。" },
            ]
        },
    ]
};
